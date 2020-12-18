$(function () {
    $('.add-to-cart').click(addToCart);
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function addToCart(ev) {
    itemId = ev.target.parentNode.parentNode.id;
    $.ajax({url: "/addToCart/"+itemId,
            method: 'POST',
            headers: {'X-CSRFToken': getCookie('csrftoken')}
    });
}
