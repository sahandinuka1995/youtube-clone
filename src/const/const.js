/**
 * @author Sahan Dinuka
 * @CreatedBy IntelliJ IDEA
 * @created 31/01/2023 - 6:07 PM
 */
export const app = {
    box: {backgroundColor: '#000'}
}

export const channelCard = {
    box: {
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        alignItems: 'center'
    },
    channelLogo: {
        borderRadius: '50%',
        height: '180px',
        width: '180px',
        mb: 2,
        border: '1px solid #e3e3e3'
    },
    checkCircleIcon: {fontSize: '14px', color: 'gray', ml: '5px'},
    typography: {fontSize: '15px', fontWeight: 500, color: 'gray', marginBottom: 50},
    channelName: {marginTop: 20, marginBottom: 0, fontWeight: 'bold', fontSize: 20},
    channelLink: {textDecoration: 'none'}
}

export const channelDetails = {
    div: {
        height: '300px',
        background: 'linear-gradient(90deg, #2EB0BC 0%, #302471 70%, #ff0000 100%)',
        zIndex: 10,
    },
    box: {paddingRight: 50, paddingLeft: 50}
}

export const feed = {
    stack: {flexDirection: {sx: "column", md: "row"}},
    box: {height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}},
    typography: {mt: 1.5, color: "#fff", textAlign: 'center', marginTop: 10},
    box2: {overflowY: "auto", height: "90vh", flex: 2},
    typography2: {color: "white", fontSize: 30, fontWeight: 'bold'},
    span: {color: "#ED1A3D"}
}

export const navbar = {
    stack: {
        position: "sticky",
        background: '#000',
        top: 0,
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        zIndex: 99999
    },
    link: {display: "flex", alignItems: "center", marginLeft: 20}
}

export const searchBar = {
    paper: {
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        display: 'flex',
        backgroundColor: '#fff',
        marginTop: 3
    },
    iconButton: {p: '10px', color: '#ED1A3D', position: 'absolute', right: 30},
    input: {
        height: 40,
        width: '100%',
        border: 'none',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 40
    }
}

export const searchFeed = {
    typography: {
        fontSize: 25,
        color: '#fff',
        marginLeft: 20,
        fontWeight: 900
    },
    span: {color: "#ED1A3D"},
    box: {mr: {sm: '100px'}},
    videoList: {
        marginLeft: 10
    }
}

export const sidebar = {
    stack: {
        overflowY: "auto",
        height: {sx: "auto", md: "95%"},
        flexDirection: {md: "column"},
    },
    button: {color: "white",},
    span: {marginRight: "15px"}
}

export const videoCard = {
    card: {width: {xs: '100%', sm: '358px', md: "320px",}, boxShadow: "none", borderRadius: 0},
    cardMedia: {width: {xs: '100%', sm: '358px'}, height: 180},
    CardContent: {
        backgroundColor: "#1E1E1E",
        height: '106px',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    checkCircleIcon: {fontSize: "12px", color: "gray", ml: "5px"},
    videoTitle: {color: '#fff', fontWeight: 'bold', marginBottom: 0},
    link: {textDecoration: 'none'},
    channelLink: {textDecoration: 'none', fontWeight: 500}
}

export const videoDetails = {
    stack: {xs: "column", md: "row"},
    box: {position: "sticky", top: "86px", marginLeft: 15, marginRight: 15},
    stack2: {color: "#fff", display: 'flex', justifyContent: 'space-between', marginBottom: 30},
    typography: {color: '#fff', margin: 10},
    checkCircleIcon: {fontSize: "12px", color: "gray", ml: "5px"},
    typography2: {opacity: 0.7, marginRight: 20},
    typography3: {opacity: 0.7},
    box2: {md: 1, xs: 5},
    sideBar: {paddingRight: 30, paddingLeft: 30},
    title: {color: '#fff', marginTop: 20, marginBottom: 20, fontSize: 20, fontWeight: 'bold'},
    channelLink: {textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'},
    viewsLikes: {display: 'flex'},
    channelLogo: {borderRadius: '100%', width: 50, height: 50, border: '5px solid #fff'},
    icon: {marginRight: 1}
}

export const video = {
    col: {marginBottom: 20}
}

export const loader = {
    col: {height: '70vh', display: 'flex', justifyContent: 'center'}
}
