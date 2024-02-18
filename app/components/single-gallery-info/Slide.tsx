import { ArtworkImageContainer } from '@/app/components/single-gallery-info/ArtworkImageContainer';
import { ArtworkTitles } from '@/app/components/single-gallery-info/ArtworkTitles';
import { ArtworkArtistImage } from '@/app/components/single-gallery-info/ArtworkArtistImage';
import { ArtworkDescription } from '@/app/components/single-gallery-info/ArtworkDescription';
import { GalleriesType } from '@/app/constants/galleries';

interface SingleGalleryInfoProps {
  gallery: GalleriesType;
}

export const Slide = ({ gallery }: SingleGalleryInfoProps) => {
  return (
    <div className="lg:flex lg:w-full lg:justify-between">
      <div className="lg:w-1/2">
        <ArtworkImageContainer
          imgSrc={gallery.images.hero.small}
          alt={gallery.description}
        />
        <ArtworkTitles title={gallery.name} artist={gallery.artist.name} />
        <ArtworkArtistImage
          imgSrc={gallery.artist.image}
          alt={gallery.description}
        />
      </div>
      <ArtworkDescription
        year={gallery.year}
        description={gallery.description}
        source={gallery.source}
      />
    </div>
  );
};

/**
 *       <ArtworkImageContainer
        imgSrc={gallery.images.hero.small}
        alt={gallery.description}
      />
      <ArtworkTitles title={gallery.name} artist={gallery.artist.name} />
      <ArtworkArtistImage
        imgSrc={gallery.artist.image}
        alt={gallery.description}
      />
      <ArtworkDescription
        year={gallery.year}
        description={gallery.description}
        source={gallery.source}
      />
 */
