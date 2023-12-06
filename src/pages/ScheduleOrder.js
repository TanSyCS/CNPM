import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import './ScheduleOrder.css'
function ScheduleOrder() {
    return (
        <div className="container">
            <div className="h-container" >
                <Header />
            </div>
            <div className="body">

                <Menu />
                <div className="content">
                    <h1>
                        Đặt lịch in
                    </h1>
                    <p>
                        Thông tin lịch in
                    </p>
                    <div className='table-container'>
                        
                    </div>
                    <div className="button-container">
                        <button>
                            Đặt lịch in
                        </button>
                        <button>
                            Hủy
                        </button>
                    </div>
                    <p>
                        Trở về
                    </p>
                </div>
            </div>
            <div className="f-container">
                <Footer />
            </div>
        </div>
    );
}
export default ScheduleOrder;
