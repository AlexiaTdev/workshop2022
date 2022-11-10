import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './aboutus.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Aboutus extends PureComponent {
  static propTypes = {}

  // const[count, setCount] = useState(0);
  // useEffect(() => {
  //   componentDidMount();
  // }, []);

  async componentDidMount() {
    // GET request using fetch with async/await
    console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------")
    // const response = await fetch('https://www.ecochauffage.guitteny.net:3000/api/user', {mode:'cors'});
    // const data = await response.json();

    // GET request using fetch with error handling
    fetch('https://apiecochauffage.guitteny.net/api/user')
      .then(async response => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        const data = await response.json();
        console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------")
        console.log(data);
        console.log(Object.keys(data).length)
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          console.log(data);
          return Promise.reject(error);
        }
        console.log("ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
        this.setState({ totalReactPackages: data.total })
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });

    // this.setState({ totalReactPackages: data.total })
    // console.log("ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    // console.log(data);
  };

  render() {
    return (
      <div className="aboutus-p">
        <Navbar />
        <div className="div-h4-p">
          L’idée de notre société est de réduire cette dépendance en réduisant la consommation
          de gaz destinée à se chauffer, tout en apportant une source de
          chauffage supplémentaire. Ce service peut bénéficier aux particuliers mais aussi aux
          entreprises soucieuses de réduire leurs coûts.
        </div>
      </div>
    )
  }
}

export default Aboutus