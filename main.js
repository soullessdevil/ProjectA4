(() => {
    let time = 0;

  function letter(el) {
    const item = document.createElement('span');
      item.innerHTML = el;
      item.classList.add('letter');
      if (el === ' ') {
        item.innerHTML = 'x';
        item.style.opacity = 0;
    }
    return item;
  }

    function Gravity(id) {
        let that = this;
        let element = document.getElementById(id);
        let text = element.textContent;
        let arr = text.split('');

        this.animate = true;
        this.floating = true;
        this.resetTime = 0;

        this.positionType = getComputedStyle(element).position;

        this.lerp = function(e, t, i) {
            return (1 - i) * e + i * t;
        }
        this.checkBound = function() {
            if (element.hasAttribute("data-bound")) {
                return element.dataset.bound === "true";
            }
        }

        this.useBound = this.checkBound();
        this.colors = [
            '#f44336', '#e91e63', '#9c27b0',
            '#673ab7', '#3f51b5', '#2196f3',
            '#03a9f4', '#00bcd4', '#009688',
            '#4caf50', '#8bc34a', '#cddc39',
            '#ffeb3b', '#ffc107', '#ff9800',
            '#ff5722', '#795548', '#9e9e9e',
            '#607d8b'
        ];

        this.randomColor = function() {
            let randNum = Math.floor(Math.random() * this.colors.length);
            return this.colors[randNum];
        }

        this.bounds = this.useBound ? {
            min: {
                x: element.offsetLeft,
                y: element.offsetTop
            },
            max: {
                x: element.offsetLeft + element.offsetWidth,
                y: element.offsetTop + element.offsetHeight
            }
        } : {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: window.innerWidth,
                y: window.innerHeight
            }
        }

        this.pointInCircle = function(point, target, radius) {
            let distsq = (point.x - target.x) * (point.x - target.x) + (point.y - target.y) * (point.y - target.y);
            return [distsq <= radius * radius, distsq];
        }

        function createSpan(text, letter, pos) {
            const span = letter(text)
            span.style.color = that.randomColor();
            span._own = {
                pos: {
                    x: 0,
                    y: 0
                },
                vel: {
                    x: -0.5 + Math.random(),
                    y: -0.5 + Math.random()
                },
                speed: {
                    x: 1,
                    y: 1
                },
                dir: {
                    x: 1,
                    y: 1
                }
            }
            return span;
        }
        this.textSpans = [];

        element.innerHTML = '';

        arr.forEach(function(t, i) {
            let el = createSpan(t, letter, {
                x: 0,
                y: 0
            });
            element.appendChild(el);
            that.textSpans.push(el);
        });

        this.getDim = function() {

            this.textSpans.forEach(function(t, i) {
                let offset = {
                    x: 0,
                    y: 0
                }
                if (that.positionType === 'relative' ||  that.positionType === 'absolute') {
                    offset.x = element.offsetLeft
                    offset.y = element.offsetTop
                }
                t._own.real = {
                        x: offset.x + t.offsetLeft,
                        y: offset.y + t.offsetTop
                    },
                    t._own.size = {
                        x: t.offsetWidth,
                        y: t.offsetHeight
                    }

            });

        };

        this.getDim();

        this.floatText = function() {
            this.textSpans.forEach(function(t, i) {

                if (t._own.pos.x + t._own.real.x < that.bounds.min.x ||  t._own.pos.x + t._own.real.x + t._own.size.x > that.bounds.max.x) {
                    t._own.dir.x *= -1;
                }
                if (t._own.pos.y + t._own.real.y < that.bounds.min.y ||  t._own.pos.y + t._own.real.y + t._own.size.y > that.bounds.max.y) {
                    t._own.dir.y *= -1;
                }
                t._own.pos.x += (t._own.vel.x * t._own.speed.x) * t._own.dir.x;
                t._own.pos.y += (t._own.vel.y * t._own.speed.y) * t._own.dir.y;
                t.style.transform = 'translateX(' + t._own.pos.x + 'px) translateY(' + t._own.pos.y + 'px)';

            });
        }
        this.update = function() {
            if (this.animate) {
                if (this.floating) {
                    this.floatText();
                } else {
                    this.floatBackwards();
                }
            }
        }

        this.floatBackwards = function() {
            this.textSpans.forEach(function(t, i) {

                let x = that.lerp(t._own.pos.x, 0, that.resetTime / 10);
                let y = that.lerp(t._own.pos.y, 0, that.resetTime / 10);

                t.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';

            });

            if (this.resetTime === 10) {
                this.animate = false;
                this.resetTime = 0;
            }
            this.resetTime++;
        }
        this.reset = function() {
            this.floating = false;
        }
        this.restart = function() {
            this.textSpans.forEach(function(t, i) {
                t._own.pos.x = 0;
                t._own.pos.y = 0;
            });
            this.floating = true;
            this.animate = true;
        }

      

        window.onresize = function() {
            that.getDim();
            
        }

    }



    function dropDownLetters(classElement, elem) {
        elem.style.transform = 'translateY(0)';
        setTimeout(() => {
            gsap.to(`.${classElement}`, {
                duration: 0.4,
                y: 0,
                delay: function(i, el) {
                    return i * 0.04;
                }
            });
        })
    }

    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('preloader-hide');

            setTimeout(() => {
                preloader.remove();
            }, 400);
            const heading = document.querySelector('.main-heading');
            const headingInner = heading.textContent;
            heading.textContent = '';
            const arraySplit = headingInner
            .split('')
            .map(el => {
              const span = letter(el)
              heading.append(span);
              return span;
            })
          
            dropDownLetters(arraySplit[0].className, heading);

            let paragraph = new Gravity('page3-text');
            let gravity = new Gravity('page3-reset');
            let button = document.getElementById('page3-reset');

            window.addEventListener('resize', () => {
          
              gravity.reset();
                    paragraph.reset();
            })
            
            button.addEventListener('click', function() {
                if (gravity.animate) {
                    gravity.reset();
                    paragraph.reset();
                } else {
                    gravity.restart();
                    paragraph.restart();
                }
            });

            let render = function(time) {
                requestAnimationFrame(render);

                animation(time);
            };

            function animation(time) {
                paragraph.update();
                gravity.update();
            };

            render(time);


        }, 400)

    })
})();