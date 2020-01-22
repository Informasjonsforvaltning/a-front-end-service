let currentIndex = 0;
let indexedIds: string[] = [];

export interface Wrapper {
  find(selector: string): any;
}
export function findByTestId(wrapper: Wrapper, testId: string) {
  const selector = `[data_test="${testId}"]`;
  return wrapper.find(selector);
}

export interface TestIdProp {
  data_test: string;
}

export function insertTestId(testId: string): TestIdProp {
  return { data_test: testId };
}
export function insertIndexedTestId(testId: string): TestIdProp {
  const id = testId + currentIndex;
  indexedIds.push(id);
  currentIndex += 1;
  return { data_test: id };
}

export function getIndexedTestIds(): string[] {
  return indexedIds;
}
export function clearIndexedIds(): void {
  indexedIds = [];
}

export const TestIdValues = {
  serviceList: {
    component: 'service-list-component',
    listItem: 'service-list-item-component',
    table: 'service-list-table',
    editButtons: 'service-item-edit-button',
    editForm: 'service-item-edit-form'
  },
  adminContent: {
    component: 'service-admin-content',
    addButton: 'service-admin-add-button',
    addForm: 'service-add-form',
    cancelButton: 'service-cancel-button'
  },
  header: {
    component: 'header-component',
    loginButton: 'login-btn',
    logoutButton: 'logout-btn',
    infoText: 'info-text'
  }
};
