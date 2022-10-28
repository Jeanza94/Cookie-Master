import NextLink from 'next/link';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'


export const NavBar = () => {
    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                >
                    <MenuOutlined />
                </IconButton>

                <NextLink href='/' style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '24px'
                }} >
                    Cookies Master
                </NextLink>

                <div style={{ flex: 1 }} />

                <NextLink href='/theme-changer' style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '24px'
                }}>
                    Cambiar tema
                </NextLink>
            </Toolbar>

        </AppBar>
    )
}
