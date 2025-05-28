import React from "react";

const Great = () => {
    return (
        <div className="container my-5 py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Great Words From People</h2>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore lacus vel facilisis.
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div
                        className="card border-0 text-center p-4 h-100"
                        style={{ backgroundColor: "#f7f7f7" }}
                    >
                        <div className="d-flex justify-content-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Stephen Smith"
                                className="rounded-circle border border-3 border-white"
                                width="100"
                                height="100"
                                style={{ marginTop: "-60px" }}
                            />
                        </div>
                        <div className="card-body">
                            <p className="text-muted mb-1">Co Founder</p>
                            <h5 className="fw-bold">Stephen Smith</h5>
                            <p className="text-muted">
                                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem
                                lacus velbr <br /> facilisis.”
                            </p>
                            <div className="fs-5"> ⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div
                        className="card border-0 text-center p-4 h-100"
                        style={{ backgroundColor: "#f7f7f7" }}
                    >
                        <div className="d-flex justify-content-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Lorem Robinson"
                                className="rounded-circle border border-3 border-white"
                                width="100"
                                height="100"
                                style={{ marginTop: "-60px" }}
                            />
                        </div>
                        <div className="card-body">
                            <p className="text-muted mb-1">Manager</p>
                            <h5 className="fw-bold">Lorem Robinson</h5>
                            <p className="text-muted">
                                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem
                                lacus vel <br /> facilisis.”
                            </p>
                            <div className="fs-5"> ⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div
                        className="card border-0 text-center p-4 h-100"
                        style={{ backgroundColor: "#f7f7f7" }}
                    >
                        <div className="d-flex justify-content-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                alt="Saddika Alard"
                                className="rounded-circle border border-3 border-white"
                                width="100"
                                height="100"
                                style={{ marginTop: "-60px" }}
                            />
                        </div>
                        <div className="card-body">
                            <p className="text-muted mb-1">Team Leader</p>
                            <h5 className="fw-bold">Saddika Alard</h5>
                            <p className="text-muted">
                                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem
                                lacus vel <br /> facilisis.”
                            </p>
                            <div className="fs-5"> ⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Great;
