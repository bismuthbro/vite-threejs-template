uniform float uPointSize;

varying vec2 vTexCoords;

void main() {
	#include <begin_vertex>

	#include <project_vertex>
	gl_PointSize = uPointSize;

  vTexCoords = position.xy;
}