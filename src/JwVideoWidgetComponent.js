import * as React from "react";
import * as Scrivito from "scrivito";
import JWPlayer from 'react-jwplayer';

Scrivito.provideComponent("JwVideoWidget", ({ widget }) => {
  const videoId = widget.get("src");

  if (!videoId.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide a JW-Video ID in the widget properties.
        </h4>
    );
  }

  return (

      <JWPlayer videoId={videoId} />

  );
});


