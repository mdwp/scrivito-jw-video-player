import * as React from "react";
import * as Scrivito from "scrivito";
import JWPlayer from 'react-jwplayer';

Scrivito.provideComponent("JwVideoWidget", ({ widget }) => {
  const videoId = widget.get("src");

  /*if (!videoId.length) {
    return (
      <InPlaceEditingPlaceholder center>
        Enter JW-Video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }*/

  return (

      <JWPlayer videoId={videoId} />

  );
});


