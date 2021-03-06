import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CoreCodeBlock = props => {
	const { className, content, language } = props.attributes;
	const classes = ['core-block-code'];

	if (className) {
		classes.push(className);
	}

	return (
		<SyntaxHighlighter
			{...classes.length > 0 && { className: classes.join(' ') }}
			language={language}
			style={okaidia}
		>
			{content}
		</SyntaxHighlighter>
	);
};

CoreCodeBlock.propTypes = {
	attributes: PropTypes.shape({
		className: PropTypes.string,
		content: PropTypes.string,
		language: PropTypes.string,
	}),
};

CoreCodeBlock.defaultProps = {
	attributes: {
		className: null,
		content: null,
		language: null,
	},
};

export default CoreCodeBlock;
