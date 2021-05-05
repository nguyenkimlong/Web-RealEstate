
import SearchResult from './SearchResult.js';


function SearchSection() {
    return (
        <div>

            <header className="masthead text-white text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">Build a landing page for your business or project and generate more leads!</h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <form>
                                <div className="form-row">
                                    <div className="col-12 col-md-9 mb-2 mb-md-0"><input className="form-control form-control-lg" type="email"
                                        placeholder="Enter your email..." /></div>
                                    <div className="col-12 col-md-3">
                                        <button className="btn btn-block btn-lg btn-primary" type="submit">Search</button>
                                    </div>
                                    <div className="col-12  col-md-3">
                                        <select class="select" multiple>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            <option value="5">Five</option>
                                            <option value="6">Six</option>
                                            <option value="7">Seven</option>
                                            <option value="8">Eight</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            <SearchResult />
        </div>


    )
}

export default SearchSection;
