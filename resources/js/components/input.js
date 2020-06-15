import {TrovieHelper} from "../user/TrovieHelper";
import {Vietnamese} from "flatpickr/dist/l10n/vn";
import flatpickr from "flatpickr";

document.addEventListener('DOMContentLoaded', function () {
    let priceInputs = document.querySelectorAll('.form-group--unit--price .trovie-input,.form-group--unit--water .trovie-input,.form-group--unit--electric .trovie-input');
    let dateInputs = document.querySelectorAll('.form-group--unit--date .trovie-input');
    let inlineEditInputs = document.querySelectorAll('.form-group--edit');
    let numberOnlyInputs = document.querySelectorAll('.form-group--numeric .trovie-input');
    if (priceInputs.length > 0) {
        for (let input of priceInputs) {
            input.addEventListener('input', function () {
                this.value = TrovieHelper.formatCurrencyForm(this.value);
            });
        }
    }
    if (dateInputs.length > 0) {
        for (let input of dateInputs) {
            flatpickr(input, {
                enableTime: false,
                dateFormat: 'd/m/Y',
                locale: Vietnamese,
                disableMobile: true
            });
        }
    }

    if (inlineEditInputs.length > 0) {
        for (let formGroup of inlineEditInputs) {
            let stateToggleBtn = formGroup.querySelector('.form-group--edit__edit-btn');
            let input = formGroup.querySelector('.trovie-input');
            stateToggleBtn.addEventListener('click', function () {
                if (input.getAttribute('readonly') !== null) {
                    input.removeAttribute('readonly');
                    input.focus();
                    stateToggleBtn.setAttribute('title', 'Hủy chỉnh sửa');
                    stateToggleBtn.style.background = 'var(--danger)';
                    stateToggleBtn.querySelector('.fa').classList.remove('fa-pencil-square-o');
                    stateToggleBtn.querySelector('.fa').classList.add('fa-times');
                } else {
                    input.setAttribute('readonly', '1');
                    input.value = input.getAttribute('data-default');
                    stateToggleBtn.setAttribute('title', 'Chỉnh sửa');
                    stateToggleBtn.style.background = 'var(--color-base)';
                    stateToggleBtn.querySelector('.fa').classList.add('fa-pencil-square-o');
                    stateToggleBtn.querySelector('.fa').classList.remove('fa-times');
                }
            })
        }
    }
    if (numberOnlyInputs.length > 0) {
        for (let input of numberOnlyInputs) {
            input.addEventListener('input', function () {
                this.value = TrovieHelper.formatCurrencyForm(this.value, '');
            });
        }
    }
});
