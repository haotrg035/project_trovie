import {TrovieHelper} from "./TrovieHelper";
import {Vietnamese} from "flatpickr/dist/l10n/vn";
import flatpickr from "flatpickr";

document.addEventListener('DOMContentLoaded', function () {
    let priceInputs = document.querySelectorAll('.form-group--unit--price .trovie-input,.form-group--unit--water .trovie-input,.form-group--unit--electric .trovie-input');
    let dateInputs = document.querySelectorAll('.form-group--unit--date .trovie-input');

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
            });
        }
    }
});
