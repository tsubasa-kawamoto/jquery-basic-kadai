$(function() {
    $('button').on('click', function () {
        const text = 'クリックしました！';
        $('.text-box').val(text);
    });
});