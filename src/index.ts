export function clearForm(form: HTMLFormElement): void {
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;

    switch (element.type.toLowerCase()) {
      case 'text':
      case 'password':
      case 'textarea':
      case 'hidden':
        (element as HTMLInputElement | HTMLTextAreaElement).value = '';
        break;
      case 'radio':
      case 'checkbox':
        (element as HTMLInputElement).checked = false;
        break;
      case 'select-one':
      case 'select-multiple':
        (element as HTMLSelectElement).selectedIndex = -1;
        break;
      default:
        break;
    }
  }
}
