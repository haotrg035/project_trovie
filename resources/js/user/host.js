import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import {TrovieHelper} from "./TrovieHelper";

document.addEventListener('DOMContentLoaded', function () {
    FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginFilePoster);
    let galleryUploader = document.querySelector('#file-gallery');
    let avatarUploader = document.querySelector('#file-avatar');
    FilePond.create(avatarUploader, TrovieHelper.getOptionsForFIlepondInstance(avatarUploader));
    FilePond.create(galleryUploader, TrovieHelper.getOptionsForFIlepondInstance(galleryUploader));
    new TrovieHelper().initGoogleMap();
});
