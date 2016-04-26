var css = `

.playlist-detail-page .paging {
  margin: 0px auto 12px auto;
}


.playlist-detail-page .edit-controls .btn span {
  margin: -4px 4px;
  display: inline-block;
}

.playlist-detail-page .page-header .edit-controls {
  margin-left: 12px;
}

.playlist-detail-page .page-header .input-group-wrapper {
  display: inline-block;
  width: 50%;

}

.playlist-detail-page .page-header .input-group-wrapper  input,
.playlist-detail-page .page-header .input-group-wrapper  .btn {
  height: 30px;
}

.playlist-detail-page .playlist-curator {
  text-align: center;
  border-radius: 5px;
  margin-bottom: 12px;
}

.playlist-detail-page .playlist-curator span {
  color: black;
}

.playlist-detail-page .playlist-curator a {
  font-style: italic;
}

.playlist-detail-page .playlist-curator .img-circle {
  box-shadow: 6px 4px 16px #857254;
  margin: 5px;
}

.playlist-detail-page .playlist-curator a span span {
  display: inline-block;
  width: 60%;
  color: white;
  text-shadow: 1px 1px black;
  font-size: 16px;
}

.playlist-detail-page .action-btn-toolbar {
  padding: 6px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 12px;
}

.playlist-detail-page .action-btn-toolbar .modal {
  padding: initial;
  height: initial;
  border-radius: initial;
  text-align: initial;
  margin-bottom: initial;
}

.playlist-detail-page  .action-btn-toolbar > .btn,
.playlist-detail-page  .action-btn-toolbar > span > .btn {
  height: 32px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
}

.playlist-detail-page .action-btn-toolbar .btn {
  height: 32px;
  margin-right: 5px;
  display: inline-block;
}

.playlist-detail-page .static-playlist-tag-editor {
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 12px;
}

.playlist-detail-page  .static-playlist-tag-editor .edit-controls {
  margin: 10px;
}

.playlist-detail-page .playlist-tags {
}

.playlist-detail-page .playlist-tags > a {
  color: #666;
}

.playlist-detail-page .playlist-tags > a:hover {
  color: #088;
}

.static-playlist-tag-editor ul {
  padding: 0px;
}

.static-playlist-tag-editor .tags li {
  display: inline-block;
  margin-right: 9px;
  border: 1px solid;
  padding: 3px 5px;
  border-radius: 4px;
  margin-bottom: 4px;
  background-color: white;
  cursor: pointer;
}

.static-playlist-tag-editor .tags li i {
  margin-right: 4px;
}

.static-playlist-tag-editor .pool {
  padding: 4px;
  height: 220px;
  overflow: scroll;
  border: 1px solid;
  background-color: white;
}

.static-playlist-tag-editor .pool li {
  margin-bottom: 3px;
  padding-left: 8px;
  cursor: pointer;
}

.static-playlist-tag-editor .pool li:hover {
  background-color: #EEE;
  border-radius: 4px;
}

.static-playlist-tag-editor .pool li i {
  margin-right: 5px;
}


.playlist-detail-page .playlist-description {
  margin-bottom: 13px;
  color: white;
  text-shadow: 1px 1px #888;;
  padding: 10px;
  border-radius: 5px;
}

.playlist-detail-page .playlist-description a {
  color: white;
  font-weight: 500;
  text-decoration: underline;
}

.playlist-detail-page .playlist-description img {
  display: block;
  margin: 16px auto;
}

.playlist-detail-page .playlist-description .edit-controls {
  margin: 10px;
}

.playlist-detail-page .playlist-description textarea {
  width: 100%;
  height: 10em;
  font-family: Arial;
  color: black;
}

.playlist-detail-page .playlist-tracks > li {
  margin-bottom: 8px;
}


.playlist-detail-page .playlist-tracks > li > .delete-track-button {
  margin-right: 10px ;
  font-weight: 200;
  padding: 4px;
}

.playlist-detail-page .playlist-tracks > li > .delete-track-button:hover::after {
  content: 'remove track';
  margin-left: 5px;
}


.playlist-detail-page .playlist-tracks .track-name {
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #555;
}

.playlist-detail-page .playlist-tracks .track-artist {
  margin-left: 8px;
  font-size: 16px;
  color: #777;
}

.tracks-widget .edit-controls {
  float: right;
}

.tracks-widget .track-list.ui-sortable {
  padding: 0px;
}

.tracks-widget .track-list.ui-sortable > li {
  padding-bottom: 8px;
  font-size: 17px;
  cursor: pointer;
  color: #777;
}

.tracks-widget .track-list.ui-sortable > li:hover {
  color: black;
}

.tracks-widget .track-list.ui-sortable > li > .dragger {
  margin: 4px;
  padding: 4px;
  border-radius: 2px;
}

`;

module.exports = css;

