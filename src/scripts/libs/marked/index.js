import marked, { Renderer } from 'marked';

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace('<a', "<a target='_blank noopener noreferrer' ");
};

marked.setOptions({
  gfm: true,
  breaks: true
});

export default marked;
