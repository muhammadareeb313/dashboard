import axios from 'axios';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../core"

import Box from '@mui/material/Box';
import  "../../App"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  '../../App.css';
import { padding } from '@mui/system';


function Scoreboard() {
    const [score, setScore] = useState({
        teamOne: "",
        teamTwo: "",
        bat: "",
        score: "",
        wicket: "",
        over: "",
        teamtwoscore: "",
        teamtwowicket: "",
        teamtwoover: "",
        commentry:"",
        batsmanNameA:"",
        batsmanNameB:"",
        bowlerNameA:"",
        bowlerNameB:"",
        runsA: "",
        runsB:"",
        ballsA: "",
        ballsB:"",

    });

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data)
            })
    }, [])

    const submit = () => {
        axios.post(`${baseUrl}/api/v1/score`, score)
            .then((res) => {
                console.log("res: ", res.data);
            })
    }

    const selectBatsmanA = (e) => {
        setScore((prev) => {
            return { ...prev, batsmanNameA: e.target.value }
        })
    };
    const selectBatsmanB = (e) => {
        setScore((prev) => {
            return { ...prev, batsmanNameB: e.target.value }
        })
    };


    const selectBowlerA = (e) => {
        setScore((prev) => {
            console.log(e.target.value)
            
            return { ...prev, bowlerNameA: e.target.value }

        })
    };
    const selectBowlerB = (e) => {
        setScore((prev) => {
            return { ...prev, bowlerNameB: e.target.value }
        })
    };
    return (
        <div style={{ margin: "1rem" }}>


            <Box className="set"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 , width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    label="Team 1"
                    variant="standard"
                    value={score.teamOne}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamOne: e.target.value }
                        })
                    }}
                    placeholder="enter team one name"
                />

                <TextField
                    label="Team 2"
                    variant="standard"
                    value={score.teamTwo}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamTwo: e.target.value }
                        })
                    }}
                    placeholder="enter team two name"
                /> 
                <TextField
                    label="Bating team"
                    variant="standard"
                    value={score.bat}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, bat: e.target.value }
                        })
                    }}
                    placeholder="who is batting"
                /> 
                <TextField
                    label="Score"
                    variant="standard"
                    type="number"
                    value={score.score}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, score: e.target.value }
                        })
                    }}
                    placeholder="What's the score"
                /> 
                <TextField
                    label="Wicket"
                    variant="standard"
                    type="number"
                    value={score.wicket}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, wicket: e.target.value }
                        })
                    }}
                    placeholder="how many wickets"
                /> 
                <TextField
                    label="Over"
                    variant="standard"
                    type="number"
                    value={score.over}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, over: e.target.value }
                        })
                    }}
                    placeholder="how many overs"
                /> 
                 <TextField
                    label="team 2 Score"
                    variant="standard"
                    type="number"
                    value={score.teamtwoscore}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamtwoscore: e.target.value }
                        })
                    }}
                    placeholder="What's the score"
                /> 
                <TextField
                    label="team 2 Wicket"
                    variant="standard"
                    type="number"
                    value={score.teamtwowicket}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamtwowicket: e.target.value }
                        })
                    }}
                    placeholder="how many wickets"
                /> 
                <TextField
                    label="team 2 over"
                    variant="standard"
                    type="number"
                    value={score.teamtwoover}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamtwoover: e.target.value }
                        })
                    }}
                    placeholder="how many overs"
                /> 
                 <TextField
                    label="commentry"
                    variant="standard"
                    value={score?.commentry}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, commentry: e.target.value }
                        })
                    }}
                    placeholder="What's your opinion"
                /> 
             
             <TextField
                    label=" runsA"
                    variant="standard"
                    type="number"
                    value={score. runsA}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev,  runsA: e.target.value }
                        })
                    }}
                    placeholder="how many runs"
                />  <TextField
                label=" runsB"
                variant="standard"
                type="number"
                value={score. runsB}
                onChange={(e) => {
                    setScore((prev) => {
                        return { ...prev,  runsB: e.target.value }
                    })
                }}
                placeholder="how many runs"
            />  <TextField
            label="ballsA"
            variant="standard"
            type="number"
            value={score.ballsA}
            onChange={(e) => {
                setScore((prev) => {
                    return { ...prev, ballsA: e.target.value }
                })
            }}
            placeholder="how many balls"
        />  <TextField
        label="ballB"
        variant="standard"
        type="number"
        value={score.ballsB}
        onChange={(e) => {
            setScore((prev) => {
                return { ...prev, ballsB: e.target.value }
            })
        }}
        placeholder="how many balls"
    /> 
                            <br />
                
                <select 
                style={{ width: "200px", height: "7vh", fontSize: "22px" ,borderRadius:"10px" ,paddingLeft:"3px"}}
                                onClick={selectBatsmanA}
                            >
                                <option selected disabled>Select Batsman 1</option>
                                <option value="Babar Azam">Babar Azam</option>

                                <option value="Rizwan">Rizwan</option>
                                <option value="Fakhar Zaman">Fakhar Zaman</option>
                                <option value="Haider Ali">Haider Ali</option>
                                <option value="Mohammad Hafeez">Mohammad Hafeez</option>
                                <option value="Shoaib Malik">Shoaib Malik</option>
                                <option value="Asif Ali">Asif Ali</option>
                                <option value="Shadab Khan">Shadab Khan</option>
                                <option value="Imad Wasim">Imad Wasim</option>
                                <option value="Hasan Ali">Hasan Ali</option>
                                <option value="Shaheen Afridi">Shaheen Afridi</option>
                                <option value="Haris Rauf">Haris Rauf</option>
                            </select>
                          
                            <select 
                style={{ width: "200px", height: "7vh", fontSize: "22px" ,borderRadius:"10px" ,paddingLeft:"3px"}}
                                onClick={selectBatsmanB}
                            >
                         <option selected disabled>Selesct Batsman 2</option>
                                <option value="Babar Azam">Babar Azam</option>

                                <option value="Rizwan">Rizwan</option>
                                <option value="Fakhar Zaman">Fakhar Zaman</option>
                                <option value="Haider Ali">Haider Ali</option>
                                <option value="Mohammad Hafeez">Mohammad Hafeez</option>
                                <option value="Shoaib Malik">Shoaib Malik</option>
                                <option value="Asif Ali">Asif Ali</option>
                                <option value="Shadab Khan">Shadab Khan</option>
                                <option value="Imad Wasim">Imad Wasim</option>
                                <option value="Hasan Ali">Hasan Ali</option>
                                <option value="Shaheen Afridi">Shaheen Afridi</option>
                                <option value="Haris Rauf">Haris Rauf</option>
                            </select>
                            <select
                                style={{ width: "200px", height: "7vh", fontSize: "22px", borderRadius:"10px",paddingLeft:"5px" }}
                                onChange={selectBowlerA}
                            >
                                <option selected disabled>Select Bowler 1</option>

                                <option value="Pat Cummins">Pat Cummins</option>
                                <option value="Mitchell Starc">Mitchell Starc</option>
                                <option value="Adam Zampa">Adam Zampa</option>
                                <option value="Aaron Finch">Aaron Finch</option>
                                <option value="Ashton Agar">Ashton Agar</option>
                                <option value="Josh Hazlewood">Josh Hazlewood</option>
                                <option value="Josh Inglis">Josh Inglis</option>
                                <option value="Mitchell Marsh">Mitchell Marsh</option>
                                <option value="Glenn Maxwell">Glenn Maxwell</option>
                                <option value="Kane Richardson">Kane Richardson</option>
                                <option value="Steve Smith">Steve Smith</option>
                                <option value="Marcus Stoinis">Marcus Stoinis</option>
                            </select>
                            <select
                                style={{ width: "200px", height: "7vh", fontSize: "22px", borderRadius:"10px" ,paddingLeft:"5px"}}
                                onChange={selectBowlerB}
                            >
                                <option selected disabled>Select Bowler 2</option>

                                <option value="Pat Cummins">Pat Cummins</option>
                                <option value="Mitchell Starc">Mitchell Starc</option>
                                <option value="Adam Zampa">Adam Zampa</option>
                                <option value="Aaron Finch">Aaron Finch</option>
                                <option value="Ashton Agar">Ashton Agar</option>
                                <option value="Josh Hazlewood">Josh Hazlewood</option>
                                <option value="Josh Inglis">Josh Inglis</option>
                                <option value="Mitchell Marsh">Mitchell Marsh</option>
                                <option value="Glenn Maxwell">Glenn Maxwell</option>
                                <option value="Kane Richardson">Kane Richardson</option>
                                <option value="Steve Smith">Steve Smith</option>
                                <option value="Marcus Stoinis">Marcus Stoinis</option>
                            </select>
                            <br />

                            <br />
 
                <Button variant="contained" onClick={submit}>Set</Button>

            </Box>

        </div>
    );
}

export default Scoreboard;