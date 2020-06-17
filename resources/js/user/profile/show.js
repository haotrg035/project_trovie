document.addEventListener('DOMContentLoaded', function () {
    initGenerateToken()
});

function initGenerateToken() {
    let formInviteToken = document.querySelector('#form-generate-token');
    let collapseInviteToken = document.querySelector('#invite-token__collapse');
    let tokenInput = collapseInviteToken.querySelector('input[name=token]');
    let tokenTimeOutSpan = collapseInviteToken.querySelector('.invite_token_timeout');
    let tokenExpiredInterval = null;

    if (formInviteToken !== null) {
        formInviteToken.onsubmit = (e) => {
            e.preventDefault();
            axios.get(formInviteToken.action,
                {
                    params: {
                        api_token: __apiToken
                    }
                }).then(response => {
                tokenInput.value = response.data.data.token;
                clearInterval(tokenExpiredInterval);
                tokenExpiredInterval = countdownInterval(new Date(response.data.data.expired_at).getTime());
                tata.success('Thông báo', 'Mã mời có hạn sử dụng trong 15 phút!');
                showBsCollapse(collapseInviteToken);
            }).catch(err => {
                tata.error('Thông báo', err.response.data.message);
            });
        };

        collapseInviteToken.querySelector('input[name=token]').onclick = () => {
            /* Select the text field */
            tokenInput.select();
            tokenInput.setSelectionRange(0, 99999); /*For mobile devices*/
            /* Copy the text inside the text field */
            document.execCommand("copy");
            /* Alert the copied text */
            tata.success('Thông báo', 'Đã copy mã mời!')
        };

        if (tokenTimeOutSpan.innerText.trim() !== '') {
            tokenExpiredInterval = countdownInterval(new Date(tokenTimeOutSpan.innerText).getTime());
            showBsCollapse(collapseInviteToken);
        }

        function countdownInterval(expired_at) {
            return setInterval(function () {
                // Get today's date and time
                let now = new Date().getTime();

                // Find the distance between now and the count down date
                let distance = expired_at - now;
                // Time calculations for days, hours, minutes and seconds
                // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                tokenTimeOutSpan.innerHTML = minutes + " : " + seconds;

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(tokenExpiredInterval);
                }
            }, 1000)
        }
    }
}
