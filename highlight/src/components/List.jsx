import Video from "./Video";
import Article from "./Article";
import HighlightItem from "./HighlightItem";

export default function List(props) {
    const VideoHighlight = HighlightItem(Video);
    const ArticleHighlight = HighlightItem(Article)
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoHighlight {...item} />
                );

            case 'article':
                return (
                    <ArticleHighlight {...item} />
                );
        }
    });
};