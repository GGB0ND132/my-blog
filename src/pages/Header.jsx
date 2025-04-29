import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="flex-grow">
          我的博客
        </Typography>
        <Button color="inherit" component={Link} to="/">首页</Button>
        <Button color="inherit" component={Link} to="/about">关于</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
