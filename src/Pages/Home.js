import React from 'react'

const Home = () => {
    return (
        <div>


            <section className='container-fluid my-5'>

                <div className='main-div-calender'>
                    <div className="schedule">
                        <div className="user-column">
                            {/* <!-- Display user names here --> */}
                            <div class="user user-name text-center">Users</div>
                            <div class="user"><div className='first-letter-name odd'>J </div> <div className='ms-2'> Johns</div></div>
                            <div class="user"><div className='first-letter-name even'>D </div> <div className='ms-2'> David Warnner</div></div>
                            <div class="user"><div className='first-letter-name odd'>R </div> <div className='ms-2'> Roman Regins</div></div>
                            <div class="user"><div className='first-letter-name even'>U </div> <div className='ms-2'> Under Taker</div></div>
                            <div class="user"><div className='first-letter-name odd'>M </div> <div className='ms-2'> Michel Strack</div></div>
                            <div class="user"><div className='first-letter-name even'>A </div> <div className='ms-2'> Ahmad Bhai</div></div>
                            <div class="user"><div className='first-letter-name odd'>K </div> <div className='ms-2'> Kamran Shabbir</div></div>
                            <div class="user"><div className='first-letter-name even'>S </div> <div className='ms-2'> Sami Bhai</div></div>
                            <div class="user"><div className='first-letter-name odd'>M </div> <div className='ms-2'> Mustaq Mumtaz</div></div>
                            <div class="user"><div className='first-letter-name even'>A </div> <div className='ms-2'> Ahmad Bhai</div></div>
                            <div class="user"><div className='first-letter-name odd'>K </div> <div className='ms-2'> Kamran Shabbir</div></div>
                            <div class="user"><div className='first-letter-name even'>S </div> <div className='ms-2'> Sami Bhai</div></div>
                            <div class="user"><div className='first-letter-name odd'>M </div> <div className='ms-2'> Mustaq Mumtaz</div></div>
                            <div class="user"><div className='first-letter-name even'>A </div> <div className='ms-2'> Ahmad Bhai</div></div>
                            <div class="user"><div className='first-letter-name odd'>K </div> <div className='ms-2'> Kamran Shabbir</div></div>
                            <div class="user"><div className='first-letter-name even'>S </div> <div className='ms-2'> Sami Bhai</div></div>
                            <div class="user"><div className='first-letter-name odd'>M </div> <div className='ms-2'> Mustaq Mumtaz</div></div>

                            {/* <!-- Add more users as needed --> */}
                        </div>
                        <div className="schedule-table">
                            {/* <!-- Display schedule table here --> */}
                            <table>
                                <thead className='table-head-fixed'>
                                    <tr>
                                        {/* <!-- Empty cell for alignment --> */}
                                        <td>03 Sun Dec 2023</td>
                                        <td>04 Sun Dec 2023</td>
                                        <td>05 Sun Dec 2023</td>
                                        <td>06 Sun Dec 2023</td>
                                        <td>07 Sun Dec 2023</td>
                                        <td>08 Sun Dec 2023</td>
                                        <td>09 Sun Dec 2023</td>
                                        <td>10 Sun Dec 2023</td>
                                        <td>11 Sun Dec 2023</td>
                                        <td>12 Sun Dec 2023</td>
                                        <td>09 Sun Dec 2023</td>
                                        <td>10 Sun Dec 2023</td>
                                        <td>11 Sun Dec 2023</td>
                                        <td>12 Sun Dec 2023</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='user-data'>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card2" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card2" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td">
                                            <div class="event-card3" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 12:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift f</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card3" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 12:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift f</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card2" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card2" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card2" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card3" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"> <div class="event-card" >
                                            <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                            <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                            <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                            </div>
                                        </div></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"><div class="event-card2" >
                                            <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                            <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                            <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                            </div>
                                        </div></td>
                                        <td className="bg-color-td">
                                            <div class="event-card3" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 12:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift f</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card3" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 12:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift f</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card2" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 10:00 AM-9:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift c</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card3" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 12:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift f</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td">
                                            <div class="event-card" >
                                                <p className='pt-1' style={{ color: 'rgb(255, 255, 255)', margin: 0 }}> 9:00 AM-6:00 PM</p>
                                                <strong style={{ color: 'rgb(255, 255, 255)' }}>Add New Shift b</strong>
                                                <div class="borderClassWhite" style={{ width: 100, display: 'flex', justifyContent: '', marginTop: 5, paddingTop: 10 }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>
                                    <tr className='user-data'>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                        <td className="bg-color-td"></td>
                                    </tr>


                                    {/* <!-- Schedule rows will be dynamically added here --> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default Home