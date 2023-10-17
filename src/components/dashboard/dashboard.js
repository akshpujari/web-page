
import classes from './dashboard.module.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Tooltip } from '@mui/material';
function Dashboard() {
    const years = [
        { revenue: 110, month: "Feb", color: "#f3efff" },
        { revenue: 90, month: "Jan", color: "#f3efff" },
        { revenue: 150, month: "mar", color: "#f3efff" },
        { revenue: 130, month: "Apr", color: "#f3efff" },
        { revenue: 100, month: "May", color: "#f3efff" },
        { revenue: 120, month: "Jun", color: "#f3efff" },
        { revenue: 90, month: "Jul", color: "#f3efff" },
        { revenue: 180, month: "Aug", color: "#5b32ea" },
        { revenue: 130, month: "Sep", color: "#f3efff" },
        { revenue: 140, month: "Oct", color: "#f3efff" },
        { revenue: 70, month: "Nov", color: "#f3efff" },
        { revenue: 150, month: "Dec", color: "#f3efff" },
    ]

    const widthAndHeight = 180
    const series = [350, 789, 537]
    const sliceColor = ['#f43799', '#6f44eb', '#f1effc']
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: "center",
            marginTop: 20
        },
        title: {
            fontSize: 25,
            position: 'absolute',
            top: '35%',
            textAlign: 'center',
            width: '30%'
        },

    })

    return (
        <div style={{ marginRight: 20 }}>
            <span style={{ fontWeight: 600 }}>
                Hello Shahrukh,
            </span>
            <WavingHandIcon style={{ color: '#d8a962' }} />
            <div className={classes.search} style={{ float: "right" }}>
                <SearchIcon style={{ width: 20 }} /> Search
            </div>
            <div style={{ marginTop: 20 }}>
                <div className={classes.kpiBar}>
                    <div className={[classes.card, classes.kpi].join(' ')}>
                        <div>
                            <img src='dollar.png' ></img>
                        </div>
                        <div className={classes.body}>
                            <div>
                                Earning
                            </div>
                            <div className={classes.value}>
                                $198K
                            </div>
                            <div>
                                <span style={{ color: "green" }}>37.8%  </span>this month
                            </div>
                        </div>
                    </div>
                    <div className={[classes.card, classes.kpi].join(' ')}>
                        <div >
                            <img src='orders.png' ></img>
                        </div>
                        <div className={classes.body}>
                            <div>
                                Orders
                            </div>
                            <div className={classes.value}>
                                $2.4K
                            </div>
                            <div>
                                <span style={{ color: "red" }}>2%  </span>this month
                            </div>
                        </div>
                    </div>
                    <div className={[classes.card, classes.kpi].join(' ')}>
                        <div >
                            <img src='balance.png' ></img>
                        </div><div className={classes.body}>
                            <div>
                                Balance
                            </div>
                            <div className={classes.value}>
                                $2.4K
                            </div>
                            <div>
                                <span style={{ color: "red" }}>2%  </span>this month
                            </div>
                        </div>
                    </div>
                    <div className={[classes.card, classes.kpi].join(' ')}>
                        <div >
                            <img src='total-sales.png' ></img>
                        </div><div className={classes.body}>
                            <div>
                                Total Sales
                            </div>
                            <div className={classes.value}>
                                $89K
                            </div>
                            <div>
                                <span style={{ color: "green" }}>11%  </span>this month
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.charts}>
                    <div className={[classes.card, classes.overview].join(' ')}>
                        <div className={classes.overviewTitle}>
                            <div>
                                <div className={classes.title}>
                                    Overview
                                </div>
                                <span className={classes.subtitle}>
                                    Monthly earning
                                </span>
                            </div>
                            <div className={classes.search} style={{ background: "#f5f6f8", width: "fit-content" }}>
                                Quarterly<KeyboardArrowDownIcon />
                            </div>
                        </div>
                        <div className={classes.monthlyChart}>
                            {years.map((year, index) => {
                                return (
                                    <div className={classes.bar}>
                                        <Tooltip title={`Revenue: $ ${year.revenue}`} placement='top'>
                                            <span key={index} style={{
                                                width: 38, height: year.revenue, backgroundColor: year.color, margin: "10px", display: "flex", borderRadius: 10
                                            }}>
                                            </span>
                                        </Tooltip>
                                        <div>
                                            {year.month}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={[classes.card, classes.doughnutChart].join(' ')}>
                        <div className={classes.title}>
                            Customers
                        </div>
                        <span className={classes.subtitle}>
                            Customers that buy products
                        </span>

                        <ScrollView style={{ flex: 1 }}>
                            <View style={styles.container}>
                                <Text style={styles.title}>
                                    <div style={{ fontWeight: 600 }}>
                                        65%
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 12 }}>Total new Customers</div>
                                    </div>
                                </Text>
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={series}
                                    sliceColor={sliceColor}
                                    coverRadius={0.6}
                                    coverFill={'#FFF'}
                                />
                            </View>
                        </ScrollView>
                    </div>
                </div>
                <div className={[classes.card, classes.tableview].join(' ')}>
                    <div className={[classes.title, classes.productTitle].join(' ')}>
                        <div>
                            Product Sell
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className={classes.search} style={{ background: "#f5f6f8", marginRight: 10 }}>
                                <SearchIcon style={{ width: 20 }} /> Search
                            </div>
                            <div className={classes.search} style={{ background: "#f5f6f8", width: "fit-content" }}>Last 30 days<KeyboardArrowDownIcon /></div>
                        </div>
                    </div>
                    <div style={{ width: "100%", overflow: "auto" }}>
                        <table>
                            <tr className={classes.subtitle}>
                                <th>Product name</th>
                                <th>Stack</th>
                                <th>Price</th>
                                <th>Total sell</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className={classes.productName} >
                                        <img src='abstract-3d.png' >
                                        </img>
                                        <div>
                                            <div className={classes.tdTitle}>Abstract 3D</div>
                                            <span className={classes.tdSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                        </div>
                                    </div>

                                </td>
                                <td>32 in stock </td>
                                <td>$49.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={classes.productName}>
                                        <img src='istockphoto.png' >
                                        </img>
                                        <div>
                                            <div className={classes.tdTitle}> Sarphens Illustration</div>
                                            <span className={classes.tdSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                        </div>
                                    </div>

                                </td>
                                <td>32 in stock </td>
                                <td>$49.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={classes.productName}>
                                        <img src='images.png' >
                                        </img>
                                        <div>
                                            <div className={classes.tdTitle}>Glass 4k Abstract</div>
                                            <span className={classes.tdSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                        </div>
                                    </div>

                                </td>
                                <td>32 in stock </td>
                                <td>$49.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={classes.productName}>
                                        <img src='image2.png' >
                                        </img>
                                        <div>
                                            <div className={classes.tdTitle}>Modern And Creative Abstract 3D</div>
                                            <span className={classes.tdSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                        </div>
                                    </div>

                                </td>
                                <td>32 in stock </td>
                                <td>$49.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={classes.productName}>
                                        <img src='image3.png' >
                                        </img>
                                        <div>
                                            <div className={classes.tdTitle}>Cube Pattern</div>
                                            <span className={classes.tdSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                        </div>
                                    </div>

                                </td>
                                <td>32 in stock </td>
                                <td>$49.99</td>
                                <td>20</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Dashboard;