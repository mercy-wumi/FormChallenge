$(function () {
    $('.js-form').submit(e => {
        e.preventDefault();
        const userTextElement = $(event.currentTarget).find('#user-text');
        $('.js-display-user-text').text(`You entered: ${userTextElement.val()}`);
        userTextElement.val("");
    })
})
