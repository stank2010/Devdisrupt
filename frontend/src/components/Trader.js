import React from "react";

export function Trader({ transferTokens, tokenSymbol }) {
  return (
    <div className="container justify-content-md-center">
      
      <div className="row">
        <div className="col">
        <form
          onSubmit={(event) => {
            // This function just calls the transferTokens callback with the
            // form's data.
            event.preventDefault();

            const formData = new FormData(event.target);
            const to = formData.get("to");
            const amount = formData.get("amount");

            if (to && amount) {
              transferTokens(to, amount);
            }
          }}
        >
          <div className="form-group">
            <label>Choose Token</label>
            {/*<input className="form-control" type="text" name="to" required value="GG"/>*/}
            <select class="form-control"  name="to" >
              <option>GG</option>
              <option>SS</option>
              <option>KU</option>
              <option>CC</option>
            </select>
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="number"
              step="1"
              name="amount"
              placeholder="1"
              required
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary mr-2" type="submit" value=" Buy " />
            <input className="btn btn-primary" type="submit" value=" Sell " />
          </div>
        </form>

        <div className="card">
           <div className="card-header">
              <strong>My token</strong>
            </div>

            <div className="card-body">
                <div class="row">
                    <div className="col-2"> </div>
                    <div className="col-4"> <strong>Gugin</strong> </div>
                    <div className="col-3">10</div>
                    <div className="col-2">GG</div>
                </div>
                <hr/>
                <div class="row">
                    <div className="col-2"> </div>
                    <div className="col-4"> <strong>Sushi</strong> </div>
                    <div className="col-3">5</div>
                    <div className="col-2">SS</div>
                </div>
                <hr/>
                <div class="row">
                    <div className="col-2"> </div>
                    <div className="col-4"> <strong>Kiniku</strong> </div>
                    <div className="col-3">20</div>
                    <div className="col-2">KU</div>
                </div>
            </div>
          </div>

        </div>

        <div className="col">
          <div className="card">
            <div className="card-header">
              <strong>Market</strong>
            </div>
            <div className="card-body">

                <div class="row">
                    <div className="col-2"> </div>
                    <div className="col-4"> <strong>Gugin</strong> </div>
                    <div className="col-4"> 50 BDBC</div>
                    <div className="col-2"></div>
                </div>
                <hr/>
                <div class="row">
                    <div className="col-2"> </div>
                    <div className="col-4"> <strong>Sushi</strong> </div>
                    <div className="col-4"> 10 BDBC</div>
                    <div className="col-2"></div>
                </div>
                <hr/>
                <div class="row">
                    <div className="col-2"> </div>
                    <div className="col-4"> <strong>Kiniku</strong> </div>
                    <div className="col-4"> 23 BDBC</div>
                    <div className="col-2"></div>
                </div>
                <hr/>
                <div class="row">
                    <div className="col-2"> </div>
                    <div className="col-4"> <strong>CC</strong> </div>
                    <div className="col-4"> 11 BDBC</div>
                    <div className="col-2"></div>
                </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
