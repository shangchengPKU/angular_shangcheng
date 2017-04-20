function fadeComment(){
            return {
                enter: function (element, done) {
                    element.css('display', 'none');
                    $(element).fadeIn(100);
                }, 
                leave: function (element, done) {
                    $(element).fadeOut(100);
                },
                move: function (element, done) {
                    $(element).slideDown(100);
                }
            }
        }