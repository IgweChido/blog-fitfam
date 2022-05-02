

import React, { Component } from 'react'
import '../../styles/page2/BlogDetails.scss'

export class Blogwords extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aenean feugiat risus velit auctor amet tortor. Nibh nisi, risus aliquet arcu scelerisque pellentesque. Arcu integer tristique lectus nam nunc id. Leo, sem tellus metus nec lorem. A, diam nisi, ut nunc. Euismod quam massa risus vitae vitae ipsum. Sit proin sit sociis rhoncus convallis. Egestas sit suspendisse faucibus nisl vitae urna risus vel. Gravida morbi nunc ut aliquam aliquet. Eu viverra semper tristique viverra ullamcorper aliquet ut non aenean. Sagittis nulla cursus vulputate vulputate justo, diam sit. Imperdiet amet cursus urna risus. Lectus nibh varius non amet malesuada lacus facilisis proin. Ut blandit diam sit sit suscipit malesuada. Leo fames sagittis malesuada donec nunc metus. Fringilla felis, euismod pellentesque quam et. Ac fusce cras lectus faucibus elit mauris, risus viverra ut. Convallis gravida vitae facilisis duis elementum nisl, tortor. Eget id sed orci, vulputate pellentesque diam volutpat.In diam, duis elit diam. Cursus ac blandit rhoncus massa nisl lobortis. Elementum ridiculus adipiscing risus, consequat libero rutrum tempus viverra non. Leo montes, suspendisse cras feugiat eget arcu amet. Enim sit habitant et, sagittis.  Risus aenean neque, quis diam sed tellus laoreet venenatis eu. Cras mattis mi dolor tellus. Aliquam eget pellentesque ut eget. Amet, rhoncus nec, nulla duis consectetur mattis morbi urna neque. Nec sagittis convallis facilisis adipiscing pulvinar potenti interdum. Natoque pharetra arcu nulla ipsum neque magna quam. Mauris, aliquam tempus urna et amet, facilisi hendrerit sed gravida. Lectus tellus pulvinar curabitur sed pellentesque ante tellus, sit metus. Pulvinar nulla felis quis netus dictum orci. Posuere dolor lectus tempus facilisis. Nec tortor adipiscing platea proin tincidunt ut netus sit. Posuere metus donec vivamus hendrerit sit lacinia. Egestas mattis amet sem felis bibendum. Ornare dolor nulla suspendisse volutpat. Vitae turpis ut convallis semper leo congue varius Sagittis egestas nulla curabitur nunc, non suspendisse at. At dignissim malesuada id mauris facilisis. Duis lectus et, sed molestie ac sit mauris. Lorem quis ultrices cursus sed habitant arcu felis quisque. Diam nisl eget varius faucibus nunc at aliquet faucibus donec Sit nisi suspendisse tempus egestas faucibus vel egestas nibh leo. Ultrices in commodo non diam risus adipiscing ut et. Diam, eget non adipiscing mauris facilisi eget turpis id magna. Interdum arcu sit molestie tempor enim et, pellentesque quam. Condimentum massa cras lectus tristique phasellus nibh. Aliquet ultricies quam nunc iaculis adipiscing nisl, sapien.Bibendum proin massa blandit risus at. Non id dui fringilla placerat bibendum arcu tortor. Tortor quam phasellus felis arcu lorem aliquam donec at malesuada. Lacinia imperdiet vestibulum in vitae viverra commodo a massa, pretium. Fermentum velit rutrum dictumst lacus, eu tellus mauris erat. Aliquet interdum et, pharetra vitae. Feugiat fringilla scelerisque fringilla fermentum ac rutrum. Viverra pharetra nullam in sed. Amet, sed amet lacinia facilisis suspendisse dictumst pellentesque lacus. Amet, in et venenatis diam sollicitudin cursus egestas eget. Enim egestas a mattis libero facilisis. Tellus, nec tortor risus tellus. Vitae habitant amet vitae tortor, commodo mauris, sapien.'
      }
    }
  render() {
      
    return (
      <div>
          <p className='blogwordss'>{this.state.first}</p>

      </div>
    )
  }
}

export default Blogwords