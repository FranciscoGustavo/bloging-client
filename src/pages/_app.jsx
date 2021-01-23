import App from 'next/app';
import cookies from 'next-cookies';
import { ThemeProvider } from 'styled-components';
import { UserProvider, AppProvider } from 'store/contexts';
import { GlobalStyles, theme } from 'root/styles';

const MyApp = ({ Component, pageProps, user }) => {
  const appState = {
    user,
    isMenuOpen: false,
  };

  return (
    <AppProvider initialValue={appState}>
      <UserProvider initialValue={user}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </AppProvider>
  );
}

MyApp.getInitialProps = async function(context) {
  const { user } = cookies(context.ctx);
  const props = await App.getInitialProps(context);
  return { ...props, user };
}

export default MyApp;
