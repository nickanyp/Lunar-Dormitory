import React from "react";

function Nav() {
  return (
    <div>
      <nav className="p-3" style={{ backgroundColor: "#2E4E73" }}>
        <div className=" flex flex-row">

            <div className="flex flex-col">
                <div className="flex flex-row">
                    <h1 className="text-white text-xl">LUNAR</h1>
                    <img
                        src="https://cdn.discordapp.com/attachments/1205929906291089510/1206851986201382912/moon.png?ex=65dd837f&is=65cb0e7f&hm=e863ab6145a32aed8b165bdbbc1e688e657bb3f8cfa80a8759dfb75fcd837160&"
                        alt="moon"
                        width="30"
                        className="mx-2"
                    ></img>
                </div>
                <h1 className="text-white text-xl">DORMITORY</h1>
            </div>

            <ul className="flex flex-row gap-10 justify-center content-center items-center" style={{ width: "85%" }}>
                <li className="text-white text-base">หน้าแรก</li>
                <li className="text-white text-base">ลงทะเบียนหอพัก</li>
                <li className="text-white text-base">ข้อมูลผู้เช่า</li>
                <li className="text-white text-base">แจ้งชำระ</li>
            </ul>

            <div className="flex flex-row justify-center content-center items-center">
                <button className="text-white text-base rounded-full border-2 px-3 py-2" style={{borderBlockColor: '#9ABDE3'}}>เข้าสู่ระบบ</button>
            </div>
    
        </div>
      </nav>
    </div>
  );
}

export default Nav;