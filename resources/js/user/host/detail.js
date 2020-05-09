import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import {TrovieHelper} from "../TrovieHelper";

document.addEventListener('DOMContentLoaded', function () {
    FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginFilePoster);
    let galleryUploader = document.querySelector('#file-gallery');
    let avatarUploader = document.querySelector('#file-avatar');
    let mapElement = document.getElementById('host-info__form-position__map');
    if (galleryUploader !== null) {
        FilePond.create(galleryUploader, TrovieHelper.getOptionsForFIlepondInstance(galleryUploader));
    }
    if (avatarUploader !== null) {
        FilePond.create(avatarUploader, TrovieHelper.getOptionsForFIlepondInstance(avatarUploader));
    }
    if (mapElement !== null) {
        new TrovieHelper().initGoogleMap(mapElement);
    }
});
