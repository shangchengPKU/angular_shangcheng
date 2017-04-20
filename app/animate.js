
//评论淡入动画
function fadeComment(){
            return {
                enter: function (element, done) {
                    element.css('display', 'none');
                    $(element).fadeIn(100);
                }, 
                leave: function (element, done) {
                	//element.css('display', 'none');
                    $(element).fadeOut(100);
                },
                move: function (element, done) {
                    //element.css('display', 'none');
                    $(element).slideDown(100);
                }
            }
        }