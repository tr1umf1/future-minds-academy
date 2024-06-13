import "./nav.css";

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Counter</a></li>
                    <li><a href="/toggle-visibility"> Toggle Visibility</a></li>
                    <li><a href="/input-field">Input Field</a></li>
                    <li><a href="/form-handling">Form Handling</a></li>
                    <li><a href="/array">Array of Items</a></li>
                </ul>
            </nav>
        </div>
    );
}
