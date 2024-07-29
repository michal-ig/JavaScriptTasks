import {render} from '@testing-library/react'
import App from '../App';

test('renders App component', () => {
    const { getByAltText, getByText } = render(<App/>);
    const logo = getByAltText('IG logo');
    const title = getByText('JavaScriptTasks Interview');

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});