import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {isDarkMode: false};
    }

    toggleTheme = () => {
        this.setState({isDarkMode: !this.state.isDarkMode})
    }
    render() {
        return (
        <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {this.props.children}
        </ThemeContext.Provider>
        )
    }
}