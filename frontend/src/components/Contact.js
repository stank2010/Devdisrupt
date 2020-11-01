import React from 'react';

export function Contact({}) {
    return (
        <div className="row">
        <div className="container justify-content-md-center mt-5"  style={{"max-width":"30%"}}>
            <div className="card">
                <div className="card-header">
                    Join Our Market
                </div>
                <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Sakan " />
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">Lastname</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Komukomuchai" />
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">Email</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="bcbc@ether.com" />
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">Tel</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="0555555555" />
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">Address</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="121/21 KPP" />
                      </div>
                      <button className="btn btn-primary"> Submit </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}