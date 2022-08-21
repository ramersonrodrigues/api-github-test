import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";


const Theme = ({ children }) => {

    const themeSelect = useSelector((state) => state.sliceTheme)

    return (
        <ThemeProvider theme={themes[themeSelect.theme]}>
            {children}
        </ThemeProvider>
    )
};
export default Theme;


const themes = {
    dark: {
        barMenu: {
            backgroundColor: "#121214",
            fontColor: "#FFFFFF",
            logoColor: "#FFFFFF",
            search: {
                backgroundColor: "#F1F1F1",
                fontColor: "#FFFFFF",
                icon: {
                    backgroundColor: "#808080",
                    color: "#FFFFFF"
                }
            },
            swith: {
                backgroundColor: "#202024",
                fontColor: "#FFFFFF",
                circle: "#FFFFFF",
            }

        },
        alert: {
            backgroundColor: "#808080",
            fontColor: "#000000",
            icon: {
                close: {
                    color: "#000000"
                },
                alert: {
                    color: "#000000"
                }
            }
        },
        cardProfile: {
            backgroundColor: "#121214", 
            fontColor: "#FFFFFF",
            line: {
                backgroundColor: "#202024",
                fontColor: "#FFFFFF",
            },
            button: {
                borderColor: "#FFFFFF",
                fontColor: "#FFFFFF"
            },
            avatar: {
                borderColor: "#FFFFFF",
            }
        },

        listRepos: {
            backgroundColor: "#121214",
            paginate: {
                iconColor: "#FFFFFF",
                fontColor: "#FFFFFF"
            },
            filter: {
                backgroundColor: "#202024",
                fontColor: "#FFFFFF",
                borderColor: "#FFFFFF",
                search: {
                    backgroundColor: "#F1F1F1",
                    fontColor: "#FFFFFF",
                    icon: {
                        backgroundColor: "#808080",
                        color: "#FFFFFF"
                    }
                },
            },
            cardRepo: {
                backgroundColor: "#f1f1f1",
                fontColor: "#000000",
                item: {
                    backgroundColor: "#dcdcdc",
                    fontColor: "#000000",
                    borderColor: "#dcdcdc",
                    icon: {
                        backgroundColor: "#808080",
                        color: "#202024",
                    }
                },
                tooltips: {
                    backgroundColor: "#000000",
                    fontColor: "#FFFFFF",
                }
            },
        },
    },
    light: {
        barMenu: {
            backgroundColor: "#505050",
            fontColor: "#dcdcdc",
            logoColor: "#dcdcdc",
            search: {
                backgroundColor: "#dcdcdc",
                fontColor: "#FFFFFF",
                icon: {
                    backgroundColor: "#808080",
                    color: "#FFFFFF"
                }
            },
            swith: {
                backgroundColor: "#dcdcdc",
                fontColor: "#000000",
                circle: "#000000",
            }

        },
        alert: {
            backgroundColor: "#808080",
            fontColor: "#000000",
            icon: {
                close: {
                    color: "#000000"
                },
                alert: {
                    color: "#000000"
                }
            }
        },
        cardProfile: {
            backgroundColor: "#505050", 
            fontColor: "#FFFFFF",
            line: {
                backgroundColor: "#202024",
                fontColor: "#FFFFFF",
            },
            button: {
                borderColor: "#FFFFFF",
                fontColor: "#FFFFFF"
            },
            avatar: {
                borderColor: "#FFFFFF",
            }
        },

        listRepos: {
            backgroundColor: "#505050",
            paginate: {
                iconColor: "#FFFFFF",
                fontColor: "#FFFFFF"
            },
            filter: {
                backgroundColor: "#202024",
                fontColor: "#FFFFFF",
                borderColor: "#FFFFFF",
                search: {
                    backgroundColor: "#dcdcdc",
                    fontColor: "#FFFFFF",
                    icon: {
                        backgroundColor: "#808080",
                        color: "#FFFFFF"
                    }
                },
            },
            cardRepo: {
                backgroundColor: "#f1f1f1",
                fontColor: "#000000",
                item: {
                    backgroundColor: "#dcdcdc",
                    fontColor: "#000000",
                    borderColor: "#dcdcdc",
                    icon: {
                        backgroundColor: "#808080",
                        color: "#202024",
                    }
                },
                tooltips: {
                    backgroundColor: "#000000",
                    fontColor: "#FFFFFF",
                }
            },
        },
    }

}