"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearForm = void 0;
function clearForm(form) {
    const elements = form.elements;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        switch (element.type.toLowerCase()) {
            case 'text':
            case 'password':
            case 'textarea':
            case 'hidden':
                element.value = '';
                break;
            case 'radio':
            case 'checkbox':
                element.checked = false;
                break;
            case 'select-one':
            case 'select-multiple':
                element.selectedIndex = -1;
                break;
            default:
                break;
        }
    }
}
exports.clearForm = clearForm;
