import React, { Component } from 'react';
import { addCourse, updateCourse } from '../../../Actions/adminCourse';
import { connect } from 'react-redux';
import _ from "lodash";


class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maKhoaHoc: "",
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: "",
            danhGia: "",
            hinhAnh: "",
            maNhom: "",
            ngayTao: "",
            maDanhMucKhoaHoc: "",
            taiKhoanNguoiTao: "",
            selectedCourse: [],
            flag: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = () => {
        const course = _.omit(this.state, ["selectedCourse", "flag"])
        addCourse(course);
    }

    componentWillReceiveProps(nextProps) {
        const { maKhoaHoc, biDanh, tenKhoaHoc, moTa, luotXem, danhGia, hinhAnh, maNhom, ngayTao} = nextProps.courseDetail;
        if (nextProps.courseDetail !== this.state.selectedCourse) {
            this.setState({
                maKhoaHoc,
                biDanh,
                tenKhoaHoc,
                moTa,
                luotXem,
                danhGia,
                hinhAnh,
                maNhom,
                ngayTao,
                maDanhMucKhoaHoc: nextProps.courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc,
                taiKhoanNguoiTao: nextProps.courseDetail.nguoiTao.taiKhoan,
                selectedCourse: nextProps.courseDetail,
                flag: "Y",
            }) 
        };
        return null;
    }

    onUpdate = () => {
        const eddittedCourse = _.omit(this.state, ["selectedCourse", "flag"]);
        updateCourse(eddittedCourse);
    }

    onReset = () => {
        this.setState({
            maKhoaHoc: "",
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: "",
            danhGia: "",
            hinhAnh: "",
            maNhom: "",
            ngayTao: "",
            maDanhMucKhoaHoc: "",
            taiKhoanNguoiTao: "",
            selectedCourse: {},
            flag: "",
        }, () => console.log(this.state, "onReset")
        )
    }

    render() {
        console.log(this.state, "courseState");

        return (
            <form>
                <button type="button" className="btn my-functional-btn" onClick={this.onReset} data-toggle="modal" data-target="#myModal">
                    Add Course
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                {
                                    _.isEmpty(this.state.flag) ?
                                        <h4 className="modal-title">Add Course</h4> :
                                        <h4 className="modal-title">Edit Course</h4>
                                }

                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maKhoaHoc">Mã Khóa Học</label>
                                    {
                                        _.isEmpty(this.state.flag) ?
                                            <input type="text" className="form-control" name="maKhoaHoc" value={this.state.maKhoaHoc} onChange={this.onChange} /> :
                                            <input type="text" className="form-control" name="maKhoaHoc" value={this.state.maKhoaHoc} onChange={this.onChange} disabled />
                                    }

                                </div>
                                <div className="form-group">
                                    <label htmlFor="biDanh">Bí Danh</label>
                                    <input type="text" className="form-control" name="biDanh" value={this.state.biDanh} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenKhoaHoc">Tên Khóa Học</label>
                                    <input type="text" className="form-control" name="tenKhoaHoc" value={this.state.tenKhoaHoc} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="moTa">Mô tả</label>
                                    <input type="text" className="form-control" name="moTa" value={this.state.moTa} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="luotXem">Lượt xem</label>
                                    <input type="number" className="form-control" name="luotXem" value={this.state.luotXem} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="danhGia">Đánh giá</label>
                                    <input type="number" className="form-control" name="danhGia" value={this.state.danhGia} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hinhAnh">Hình ảnh</label>
                                    <input type="text" className="form-control" name="hinhAnh" value={this.state.hinhAnh} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maNhom">Mã nhóm</label>
                                    <input type="text" className="form-control" name="maNhom" value={this.state.maNhom} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ngayTao">Ngày tạo</label>
                                    <input type="date" className="form-control" name="ngayTao" value={this.state.ngayTao} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maDanhMucKhoaHoc">Mã danh mục khóa học</label>
                                    <input type="text" className="form-control" name="maDanhMucKhoaHoc" value={this.state.maDanhMucKhoaHoc} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo</label>
                                    <input type="text" className="form-control" name="taiKhoanNguoiTao" value={this.state.taiKhoanNguoiTao} onChange={this.onChange} />
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                {
                                    _.isEmpty(this.state.flag) ?
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onSubmit}>Submit</button> :
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.onUpdate}>Update</button>
                                }

                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseDetail: state.getCourseDetail,
    }
}

export default connect(mapStateToProps)(AddCourse)