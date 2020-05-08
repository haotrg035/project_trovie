import {TrovieHelper} from "./TrovieHelper";

$(document).ready(function ($) {
    let tableListService = $('#table-list-service').dataTable({
        "language": new TrovieHelper().getDataTableLanguage(),
    });
});
