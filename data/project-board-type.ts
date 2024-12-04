export type TestData = {
    project: 'Web Application' | 'Mobile Application' | 'Marketing Campaign';
    ticket: string;
    column: 'To Do' | 'In Progress' | 'Review' | 'Done';
    tags: string[];
}