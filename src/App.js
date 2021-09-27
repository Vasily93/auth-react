import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

//This is a way to pass contexts to react class components without react hooks!

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
