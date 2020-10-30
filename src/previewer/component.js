import React from 'react';
const marked = require("marked");

marked.setOptions({breaks:true})

const initialText = '# Header\n## Subheader\n[links](https://www.freecodecamp.com)\n' +
'This is inline `code`\n```\n // This is a code Block:\n```\n' +
'1. First ordered list item\n2. Another item\n⋅⋅* Unordered sub-list.\n' +
'> Block Quotes!\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n**bolded text**';

export class MarkdownPreviewer extends React.Component{
  // constructor(props) {
  //   super(props);
  // };

  componentDidMount() {
    document.getElementById("editor").value = initialText;
    this.props.inputChanged(document.getElementById("editor").value);
  }

  componentDidUpdate() {
    document.getElementById("preview").innerHTML = this.props.text;
  }



  render() {
    return(
      <div>
        <textarea id="editor" onChange={() => this.props.inputChanged(document.getElementById("editor").value)}></textarea>

        <div id="preview"> 
        </div>
      </div>

    );
  }
}