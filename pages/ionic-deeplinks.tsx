import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import type { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    (theme) => ({
        root: {
            marginTop: theme.spacing(4),
        },
        gridContainer: {
            marginTop: theme.spacing(4),
        },
        heading: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        TextField: {
            marginTop: theme.spacing(2),
        },
        linkItem: {
            fontSize: theme.typography.subtitle1.fontSize,

            '& ~ &': {
                marginTop: 4,
            },
        },
    }),
    { name: 'IonicDeeplinksPage' }
);

const IonicDeeplinksPage: NextPage = () => {
    const classes = useStyles();

    const [urlScheme, setUrlScheme] = useState('myapp');
    const [deeplinkScheme, setDeeplinkScheme] = useState('https');
    const [deeplinkHost, setDeeplinkHost] = useState('myapp.com');
    const [androidPathPrefix, setAndroidPathPrefix] = useState('');

    const [urlSchemePathname, setUrlSchemePathname] =
        useState('send?message=Hello');
    const [deeplinkPath, setDeeplinkPath] = useState('/help');

    const inputsFilled =
        urlScheme && deeplinkScheme && deeplinkHost && urlSchemePathname;

    return (
        <Container className={classes.root}>
            <Typography variant="h2">Deeplinks</Typography>
            <Typography variant="subtitle1">
                This plugin handles deeplinks on iOS and Android for both custom
                URL scheme links and Universal App Links.
            </Typography>

            <Grid className={classes.gridContainer} container spacing={3}>
                <Grid container item md={6}>
                    <Typography className={classes.heading} variant="h5">
                        Ionic Deeplinks Plugin Configuration
                    </Typography>

                    <TextField
                        className={classes.TextField}
                        value={urlScheme}
                        onChange={(e) => setUrlScheme(e.target.value)}
                        label="URL_SCHEME"
                        helperText={
                            <>
                                the custom URL scheme you'd like to use for your
                                app. This lets your app respond to links like{' '}
                                <code>myapp://blah</code>
                            </>
                        }
                        fullWidth
                        required
                    />

                    <TextField
                        className={classes.TextField}
                        value={deeplinkScheme}
                        onChange={(e) => setDeeplinkScheme(e.target.value)}
                        label="DEEPLINK_SCHEME"
                        helperText={
                            <>
                                the scheme to use for universal/app links.
                                Defaults to 'https' in 1.0.13. 99% of the time
                                you'll use <code>https</code> here as iOS and
                                Android require SSL for app links domains.
                            </>
                        }
                        fullWidth
                        required
                    />

                    <TextField
                        className={classes.TextField}
                        value={deeplinkHost}
                        onChange={(e) => setDeeplinkHost(e.target.value)}
                        label="DEEPLINK_HOST"
                        helperText={
                            <>
                                the host that will respond to deeplinks. For
                                example, if we want{' '}
                                <code>example.com/product/cool-beans</code> to
                                open in our app, we'd use{' '}
                                <code>example.com</code> here.
                            </>
                        }
                        fullWidth
                        required
                    />

                    <TextField
                        className={classes.TextField}
                        value={androidPathPrefix}
                        onChange={(e) => setAndroidPathPrefix(e.target.value)}
                        label="ANDROID_PATH_PREFIX"
                        helperText={
                            <>
                                (optional): specify which path prefix our
                                Android app should open from{' '}
                                <a
                                    href="https://developer.android.com/guide/topics/manifest/data-element.html"
                                    target="_blank"
                                >
                                    more info
                                </a>
                            </>
                        }
                        fullWidth
                    />

                    <Typography variant="h5" className={classes.heading}>
                        Other configuration
                    </Typography>

                    <TextField
                        className={classes.TextField}
                        value={urlSchemePathname}
                        onChange={(e) => setUrlSchemePathname(e.target.value)}
                        label="URL_SCHEME pathname"
                        helperText={<>e.g. send?message=Hello</>}
                        fullWidth
                        required
                    />

                    <TextField
                        className={classes.TextField}
                        value={deeplinkPath}
                        onChange={(e) => setDeeplinkPath(e.target.value)}
                        label="DEEPLINK path"
                        helperText={<>(optional): e.g. /path/to/page</>}
                        fullWidth
                    />
                </Grid>

                {inputsFilled ? (
                    <Grid container item md={6}>
                        <div>
                            <Typography
                                className={classes.heading}
                                variant="h5"
                            >
                                Links
                            </Typography>

                            <div className={classes.linkItem}>
                                <strong>URL Scheme: </strong>
                                <span>
                                    <a
                                        href={`${urlScheme}://${urlSchemePathname}`}
                                    >
                                        {`${urlScheme}://${urlSchemePathname}`}
                                    </a>
                                </span>
                            </div>

                            <div className={classes.linkItem}>
                                <strong>Deeplink Host: </strong>
                                <span>
                                    <a
                                        href={`${deeplinkScheme}://${deeplinkHost}${deeplinkPath}`}
                                    >
                                        {`${deeplinkScheme}://${deeplinkHost}${deeplinkPath}`}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </Grid>
                ) : null}
            </Grid>
        </Container>
    );
};

export default IonicDeeplinksPage;
