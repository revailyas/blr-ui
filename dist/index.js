function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var style = {"btn":"_styles-module__btn__1Pz2d","btn-circle":"_styles-module__btn-circle__ZMOEZ","btn-circle-custom":"_styles-module__btn-circle-custom__38f37","square-btn":"_styles-module__square-btn__1HEK_","default-circle-btn":"_styles-module__default-circle-btn__39XKQ","medium-btn":"_styles-module__medium-btn__38YRm","medium-circle-btn":"_styles-module__medium-circle-btn__2qA6O","small-btn":"_styles-module__small-btn__2FH_1","small-circle-btn":"_styles-module__small-circle-btn__38yRp","xsmall-btn":"_styles-module__xsmall-btn__1F4aM","xsmall-circle-btn":"_styles-module__xsmall-circle-btn__1P2U1","primary-btn":"_styles-module__primary-btn__39bnp","secondary-btn":"_styles-module__secondary-btn__21664","disabled-btn":"_styles-module__disabled-btn__1hoGZ","transparent-btn":"_styles-module__transparent-btn__oBYU2","white-btn":"_styles-module__white-btn__DvBYY","color-btn":"_styles-module__color-btn__MHNEW"};

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      extClass = _ref.extClass,
      color = _ref.color,
      styles = _ref.styles,
      disabled = _ref.disabled,
      size = _ref.size,
      shape = _ref.shape,
      Icon = _ref.Icon;
  var buttonStyle = style.btn;
  var buttonColor = 'linear-gradient(105deg, #24B9E1 0%, #7166C4 100%)';
  var buttonDisabled = false;

  if (disabled) {
    buttonStyle += ' ' + style['disabled-btn'];
    buttonDisabled = disabled;
  }

  if (shape === 'rectangle') {
    buttonStyle += ' ' + style['square-btn'];
  }

  switch (styles) {
    case 'primary':
      buttonStyle += ' ' + style['primary-btn'];
      break;

    case 'secondary':
      buttonStyle += ' ' + style['secondary-btn'];
      break;

    case 'transparent':
      buttonStyle += ' ' + style['transparent-btn'];
      break;

    case 'white':
      buttonStyle += ' ' + style['white-btn'];
      break;

    case 'color':
      buttonStyle += ' ' + style['color-btn'];
      buttonColor = color;
      break;

    default:
      buttonStyle += ' ' + style['primary-btn'];
      break;
  }

  if (size === 'm') {
    buttonStyle += ' ' + style['medium-btn'];
  } else if (size === 's') {
    buttonStyle += ' ' + style['small-btn'];
  } else if (size === 'xs') {
    buttonStyle += ' ' + style['xsmall-btn'];
  }

  switch (buttonColor) {
    case 'red':
      buttonColor = '#D9005C';
      break;

    case 'yellow':
      buttonColor = '#F7BE2D';
      break;

    case 'blue':
      buttonColor = '#354199';
      break;

    case 'cyan':
      buttonColor = '#24B9E1';
      break;

    case 'black':
      buttonColor = '#020726';
      break;
  }

  return /*#__PURE__*/React.createElement("button", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle + ' ' + extClass,
    style: {
      backgroundColor: buttonColor
    }
  }, Icon ? /*#__PURE__*/React.createElement(Icon, null) : null, text);
};

var ButtonCircle = function ButtonCircle(_ref2) {
  var Icon = _ref2.Icon,
      onClick = _ref2.onClick,
      extClass = _ref2.extClass,
      size = _ref2.size,
      color = _ref2.color,
      disabled = _ref2.disabled;
  var buttonStyle = '';
  var buttonColor = color;
  var buttonOpacity = 1;
  var buttonDisabled = disabled;

  if (disabled) {
    buttonOpacity = 0.2;
  }

  if (buttonColor !== undefined) {
    buttonStyle = style['btn-circle-custom'];
  } else {
    buttonStyle = style['btn-circle'];
  }

  if (size === 'm') {
    buttonStyle += ' ' + style['medium-circle-btn'];
  } else if (size === 's') {
    buttonStyle += ' ' + style['small-circle-btn'];
  } else if (size === 'xs') {
    buttonStyle += ' ' + style['xsmall-circle-btn'];
  } else {
    buttonStyle += ' ' + style['default-circle-btn'];
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle + ' ' + extClass,
    style: {
      backgroundColor: buttonColor,
      opacity: buttonOpacity
    }
  }, /*#__PURE__*/React.createElement(Icon, null));
};

exports.Button = Button;
exports.ButtonCircle = ButtonCircle;
//# sourceMappingURL=index.js.map
