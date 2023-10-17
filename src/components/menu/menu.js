import classes from './menu.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import DiscountIcon from '@mui/icons-material/Discount';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Menu() {
    return (
        <div className={classes.title}>
            <div className={classes.menu}>
                <div>
                    <div style={{ fontSize: 20, display: "flex" }}>
                        <SettingsIcon style={{ marginRight: 10 }} />Dashboard
                    </div>
                    <div style={{ margin: "30px 0px", fontSize: 12 }}>
                        <div className={classes.active}>
                            <DashboardOutlinedIcon />Dashboard</div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <LayersOutlinedIcon /> Product
                            </div>
                            <ChevronRightIcon />
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <AccountBoxOutlinedIcon /> Customers
                            </div>
                            <ChevronRightIcon />
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <RequestQuoteOutlinedIcon /> Income
                            </div>
                            <ChevronRightIcon />
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <DiscountIcon /> Promote
                            </div>
                            <ChevronRightIcon />
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <LiveHelpIcon /> Help
                            </div>
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>
                <div className={classes.account}>
                    <div className={classes.person}>
                        <img src='person.png'></img>
                        <div>
                            <div>Evano</div>
                            <div style={{ color: "#51537e" }}>Project Manager</div>
                        </div>
                    </div>
                    <KeyboardArrowDownIcon />

                </div>
            </div>
            <div className={classes.smallMenu}>
                <div>
                    <div style={{ fontSize: 20, display: "flex", justifyContent: "center" }}>
                        <SettingsIcon />
                    </div>
                    <div style={{ margin: "30px 0px", fontSize: 12 }}>
                        <div className={classes.active}>
                            <DashboardOutlinedIcon /></div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <LayersOutlinedIcon />
                            </div>
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <AccountBoxOutlinedIcon />
                            </div>
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <RequestQuoteOutlinedIcon />
                            </div>
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <DiscountIcon />
                            </div>
                        </div>
                        <div className={classes.menuItem}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <LiveHelpIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.account}>
                    <img src='person.png'></img>
                </div>
            </div>

        </div >
    )
}

export default Menu;