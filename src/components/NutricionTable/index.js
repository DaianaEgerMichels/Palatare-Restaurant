import {Component} from "react";
import PropTypes from "prop-types";

class NutricionTable extends Component{
    render(){
        return(
            <section>
                    <table>
                        <thead>
                            <tr>
                                <th>{this.props.fruit}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {this.props.calories}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Carbohydrates:
                                </td>
                                <td>
                                    {this.props.carbohydrates}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Proteins:
                                </td>
                                <td>
                                   {this.props.proteins}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Lipids: 
                                </td>
                                <td>
                                   {this.props.lipids}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Saturated Fat:
                                </td>
                                <td>
                                    {this.props.fat}
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                </section>
        )
    }

}

NutricionTable.propTypes = {
    fruit: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
    carbohydrates: PropTypes.string.isRequired,
    proteins: PropTypes.string.isRequired,
    lipids: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
}

export default NutricionTable;