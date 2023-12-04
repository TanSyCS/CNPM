import React, { useState } from 'react';
import './Main.css';
const Main = () => {
    return(
        <div className="Main">
                <p
                    style={{
                        backgroundColor: '#white',
                        color: '#0346AA',
                         fontSize: '48px',
                            fontFamily: 'EB Garamond',
                                                                                fontWeight: '700',
                                                                                wordWrap: 'break-word',
                                                                                padding: '10px',
                                                                                textAlign: 'center',
                                                                                margin: 'auto',
                                                                        }}
                                                                >
                                                                Quản lí máy in
                </p>
        <p1>
                               <b> Mã máy in </b>   <br />
                               <form action="http://www.example.com/subscribe.php">
                                <input type="text" name="email" size="40"/>
                                <input type="submit" name="search" 
                                value="Tìm kiếm" />
                                </form>                                  
        </p1>
        <div className="Form2">
                                <b> Thương hiệu </b>   <br />
                                <form action="http://www.example.com/subscribe.php">
                                <input type="text" name="email" size="40"/>
                                <input type="submit" name="search" 
                                value="Tìm kiếm" />
                                </form>                                  
        </div>
        <div className="Form3">
                                <b> Địa điểm </b>   <br />
                                <form action="http://www.example.com/subscribe.php">
                                <input type="text" name="email" size="40"/>
                                <input type="submit" name="search" 
                                value="Tìm kiếm" />
                                </form>                                  
        </div>
        

        <div className="search">
                    <div className="row g-0">
                        <div class="Container" style={{ width: '971px' }}>
                            <div
                            className="schedule"
                            style={{
                                color: '#0346AA',
                                fontSize: 18,
                                fontFamily: 'EB Garamond',
                                fontWeight: '700',
                                wordWrap: 'break-word',
                                paddingTop: '26px',
                            }}
                            >
                           <a href="http://www.imdb.com">Thêm máy in</a>
                            </div>
                            <div className="Table">
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col" class="col" style={{ width: '172px' }}>
                                    MÃ MÁY IN
                                    </th>
                                    <th scope="col" class="col" style={{ width: '279px' }}>
                                    THƯƠNG HIỆU
                                    </th>
                                    <th scope="col" class="col" style={{ width: '172px' }}>
                                    ĐỊA ĐIỂM
                                    </th>
                                    <th scope="col" class="col" style={{ width: '325px' }}>
                                    HÀNH ĐỘNG
                                    </th>
                                    <th
                                    scope="col"
                                    class="col"
                                    style={{
                                        width: '75px',
                                        backgroundColor: 'rgb(255 255 255 / 0%)',
                                    }}
                                    ></th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* {{#each data}}
                                                <tr class="">

                                                    <td >{{this.main}}</td>
                                                    <td>{{this.mayin}}</td>
                                                    <td>{{this.time}}</td>
                                                    <td>{{this.tailieu}}</td>
                                                    <td>
                                                        <button onclick="deleteDish('{{this._id}}')"
                                                            class="btn btn-sm btn-danger" style={{color: '#FF0000', fontSize: 18, fontFamily: 'EB Garamond', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>hủy</button>
                                                    </td>

                                                </tr>
                                                {{/each}} */}
                                </tbody>
                            </table>
                            </div>
                            <div
                            className="history"
                            style={{
                                color: '#0346AA',
                                fontSize: 18,
                                fontFamily: 'EB Garamond',
                                fontWeight: '700',
                                wordWrap: 'break-word',
                                paddingTop: '26px',
                            }}
                            >
                           
                            </div>
                        </div>
                 </div>
            </div>
        </div>
    );
  };
export default Main; 