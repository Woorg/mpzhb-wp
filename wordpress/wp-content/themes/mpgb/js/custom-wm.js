jQuery(document).ready(function($) {
    var x = 0;
    $('.related__list .related__item').each(function(indx, element){
        x++
    });

    if (x>3) $('.related__button').css('display', 'inline-block');

    $('.subnav').eq(1).css('left', '433px');
    $('.subnav').eq(2).css('left', '603px');

    $('.card__download').on('click', function(){

        var html = $('.tablepress').html(),
            table = $('.tablepress').attr('id'),
            idpost = $(this).closest('.card__actions').data('id');

        var data = {
            action: 'wm_get_file',
            html: html,
            table: table,
            idpost: idpost
        };

        jQuery.ajax ({
            url: wm_ajax_object.ajax_url,
            type: 'POST',
            data: data,
            beforeSend: function () {
                $('#wmloading').show();
            },
            complete: function () {
                $("#wmloading").hide();
            },
            success:function(data) {
                download(data);
            }
        });
    });

    function download(filename) {
        var element = document.createElement('a');
        element.setAttribute('href', filename);
        element.setAttribute('download', '');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

});